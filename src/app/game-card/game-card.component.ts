import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../game.service';
import { interval, Subscription } from 'rxjs';
import { GameCard, Category } from './game-card';

const DEFAULT_COUNTDOWN: number = 60;
const ANIMATION_DURATION: number = 400;

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit, OnDestroy {
  isFlipped: boolean = false;
  categories: Category[] = this.gameService.getCategories();
  selectedCategory: string = this.categories[0].title;
  cardCategory: string = this.selectedCategory;
  currentPhrase: GameCard = { mumbled: '', actual: '' };

  countdown: number = 0;
  timerEnabled: boolean = false;
  private timerSubscription?: Subscription;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadPhrase();
    if (this.timerEnabled) {
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  loadPhrase(): void {
    const newPhrase = this.gameService.getRandomPhrase(this.selectedCategory);
    this.currentPhrase = newPhrase.card;
    this.cardCategory = newPhrase.category;
  }

  flipCard(): void {
    if (this.timerEnabled) {
      if (!this.isFlipped) {
        this.stopTimer();
      } else if (this.countdown > 0) {
        this.startTimer();
      }
    }
    this.isFlipped = !this.isFlipped;
  }

  async getNextCard(): Promise<void> {
    if (this.isFlipped) {
      this.isFlipped = false;
      await new Promise((resolve) => setTimeout(resolve, ANIMATION_DURATION));
    }
    this.loadPhrase();
    if (this.timerEnabled) {
      this.resetTimer();
      this.startTimer();
    }
  }

  toggleTimer(): void {
    this.timerEnabled = !this.timerEnabled;
    this.resetTimer();
    if (this.timerEnabled && !this.isFlipped) {
      this.startTimer();
    }
  }

  private startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.stopTimer();
        this.flipCard();
      }
    });
  }

  private stopTimer(): void {
    this.timerSubscription?.unsubscribe();
  }

  private resetTimer(): void {
    this.timerSubscription?.unsubscribe();
    this.countdown = DEFAULT_COUNTDOWN;
  }
}

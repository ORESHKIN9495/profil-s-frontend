import { home } from "@/pages/home/stores";

const store = home();

export class WheelSlideSwitcher {
  container: HTMLElement;
  panels: HTMLElement[];
  currentIndex: number;
  lastScrollTime: number;
  scrollThreshold: number;
  touchStartY: number;
  touchSensitivity: number;
  footer: HTMLElement;

  constructor(containerSelector: string, panelSelector: string) {
    this.container = document.querySelector(containerSelector) as HTMLElement;
    this.panels = Array.from(document.querySelectorAll(panelSelector));
    this.currentIndex = 0;
    this.lastScrollTime = 0;
    this.scrollThreshold = 1400; // Пороговое значение для прокрутки
    this.touchStartY = 0;
    this.touchSensitivity = 30; // Чувствительность к свайпу
    this.footer = document.querySelector("#tab_5") as HTMLElement;
    this.attachEvents();
  }

  attachEvents() {
    window.addEventListener("wheel", this.onScroll.bind(this), {
      passive: false
    });

    window.addEventListener("keydown", this.onKeydown.bind(this), {
      passive: false
    });

    this.container.addEventListener("touchstart", this.onTouchStart.bind(this), { passive: true });
    this.container.addEventListener("touchend", this.onTouchEnd.bind(this), { passive: true });

    this.footer.addEventListener("touchstart", this.onTouchStart.bind(this), { passive: true });
    this.footer.addEventListener("touchend", this.onTouchEnd.bind(this), { passive: true });

    this.scrollToCurrentPanel();
  }

  onScroll(event: WheelEvent) {
    const currentTime = Date.now();

    if (currentTime - this.lastScrollTime < this.scrollThreshold) {
      return;
    }

    this.lastScrollTime = currentTime;

    const direction = event.deltaY > 0 ? 1 : -1;

    this.switchPanel(direction);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === "ArrowUp") {
      this.switchPanel(-1);
    } else if (event.key === "ArrowDown") {
      this.switchPanel(1);
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent) {
    const touchEndY = event.changedTouches[0].clientY;
    const distanceY = this.touchStartY - touchEndY;

    if (Math.abs(distanceY) >= this.touchSensitivity) {
      const direction = distanceY > 0 ? 1 : -1;
      this.switchPanel(direction);
    }
  }

  switchPanel(direction: number) {
    const potentialIndex = this.currentIndex + direction;

    if (this.currentIndex + direction >= 4) {
      this.footer?.scrollIntoView({ behavior: "smooth" });
      this.currentIndex = 4;
    }

    if (potentialIndex >= 0 && potentialIndex < this.panels.length) {
      this.currentIndex = potentialIndex;
      this.scrollToCurrentPanel();
    }

    store.index = this.currentIndex;
  }

  scrollToCurrentPanel() {
    const nextPanel = this.panels[this.currentIndex];

    if (nextPanel) {
      nextPanel.scrollIntoView({ behavior: "smooth" });
    }
  }
}

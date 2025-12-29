import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { ThemeService } from './theme.service';

describe('ThemeSwitcherComponent', () => {
  let component: ThemeSwitcherComponent;
  let fixture: ComponentFixture<ThemeSwitcherComponent>;
  let themeService: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwitcherComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set theme when setTheme is called', () => {
    spyOn(themeService, 'setTheme');
    component.setTheme('dark');
    expect(themeService.setTheme).toHaveBeenCalledWith('dark');
  });

  it('should return correct icon for light theme', () => {
    component.currentTheme = 'light';
    expect(component.getThemeIcon()).toBe('☀️');
  });

  it('should return correct icon for dark theme', () => {
    component.currentTheme = 'dark';
    expect(component.getThemeIcon()).toBe('🌙');
  });

  it('should return correct icon for auto theme', () => {
    component.currentTheme = 'auto';
    expect(component.getThemeIcon()).toBe('💻');
  });

  it('should return correct label for each theme', () => {
    component.currentTheme = 'light';
    expect(component.getThemeLabel()).toBe('Light');

    component.currentTheme = 'dark';
    expect(component.getThemeLabel()).toBe('Dark');

    component.currentTheme = 'auto';
    expect(component.getThemeLabel()).toBe('Auto');
  });
});

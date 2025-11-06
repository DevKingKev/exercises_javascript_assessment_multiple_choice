<template>
  <nav class="nav-header" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <RouterLink to="/" class="brand-link" aria-label="BuildWithHTML5 home">
          <h1>BuildWithHTML5</h1>
        </RouterLink>
      </div>
      <!-- Centered domain display (e.g. "JavaScript") -->
      <div class="nav-domain" aria-hidden="true">
        <span class="nav-domain-inner">{{ domainName }}</span>
      </div>
      
      <div class="nav-content">
        <ul class="nav-links" role="menubar">
          <li role="none">
            <RouterLink
              to="/"
              class="nav-link"
              role="menuitem"
              :aria-current="isActive('/') ? 'page' : undefined"
            >
              <span class="nav-icon" aria-hidden="true">🏠</span>
              <span class="nav-text">Home</span>
            </RouterLink>
          </li>
          <li role="none">
            <RouterLink
              to="/results"
              class="nav-link"
              role="menuitem"
              :aria-current="isActive('/results') ? 'page' : undefined"
            >
              <span class="nav-icon" aria-hidden="true">📊</span>
              <span class="nav-text">Results</span>
            </RouterLink>
          </li>
        </ul>

        <div class="nav-actions">
          <RouterLink
            to="/settings"
            class="settings-link"
            role="menuitem"
            :aria-current="isActive('/settings') ? 'page' : undefined"
            aria-label="User settings"
            title="User Settings"
          >
            <span class="settings-icon" aria-hidden="true">⚙️</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useGlobalStore } from '@/stores/globalStore';

const route = useRoute();

const isActive = computed(() => {
  return (path: string) => {
    if (path === '/') {
      return route.path === '/';
    }
    return route.path.startsWith(path);
  };
});

// Global display name for the current assessment domain (e.g. "JavaScript")
const globalStore = useGlobalStore();
const domainName = computed(() => globalStore.displayLanguageName || 'JavaScript');
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.nav-header {
  background: white;
  border-bottom: 2px solid $gray-200;
  box-shadow: $shadow-sm;
  position: sticky;
  top: 0;
  z-index: 50;
}

/* Centered domain label between brand and nav content */
.nav-domain {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  font-size: $font-size-2xl;
  color: $gray-700;
  border-radius: $radius-md;
  transition: background $transition-fast, color $transition-fast, transform $transition-fast;
  cursor: default;
  pointer-events: none; /* keep non-interactive so it doesn't block nav clicks */
  will-change: transform;
}

/* Inner element animates so we can still keep outer element non-interactive */
.nav-domain-inner {
  display: inline-block;
  pointer-events: none;
  /* Use a slow pulsing animation instead of the floating animation */
  // animation: navPulse 4s ease-in-out infinite;
  transform-origin: center;
}

/* Floating keyframes: small vertical + horizontal oscillation to mimic a cork on a wave */
@keyframes navFloat {
  0%   { transform: translateX(0) translateY(0); }
  8%   { transform: translateX(-1px) translateY(-1px); }
  16%  { transform: translateX(-2px) translateY(-2px); }
  24%  { transform: translateX(-1.5px) translateY(-3px); }
  32%  { transform: translateX(0.5px) translateY(-3.5px); }
  40%  { transform: translateX(1.5px) translateY(-4px); }
  50%  { transform: translateX(0.5px) translateY(-3.5px); }
  64%  { transform: translateX(-0.5px) translateY(-3px); }
  76%  { transform: translateX(0.5px) translateY(-2px); }
  88%  { transform: translateX(0.25px) translateY(-1px); }
  100% { transform: translateX(0) translateY(0); }
}

/* Slow pulsing keyframes: subtle scale + shadow to mimic a gentle heartbeat */
@keyframes navPulse {
  0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
  30% { transform: scale(1.06); filter: drop-shadow(0 4px 12px rgba(0,0,0,0.06)); }
  55% { transform: scale(1.02); filter: drop-shadow(0 2px 8px rgba(0,0,0,0.04)); }
  100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
}

/* Mild hover effect triggered when the nav header is hovered (keeps element non-blocking) */
.nav-header:hover .nav-domain {
  /* Do not apply a background on hover; only adjust color/position */
  color: $primary;
  transform: translateX(-50%) translateY(-1px);
}

.nav-container {
  max-width: $container-max-width;
  margin: 0 auto;
  padding: 0 $container-padding;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand {
  .brand-link {
    text-decoration: none;
    color: $gray-800;
    transition: color $transition-fast;

    &:hover {
      color: $primary;
    }

    &:focus-visible {
      outline: 2px solid $primary;
      outline-offset: 4px;
      border-radius: $radius-sm;
    }

    h1 {
      margin: 0;
      font-size: $font-size-2xl;
      font-weight: $font-weight-bold;
      background: $gradient-primary;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}

.nav-content {
  display: flex;
  align-items: center;
  gap: $spacing-3xl;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  padding-left: $spacing-xl;
  border-left: 2px solid $gray-200;
}

.settings-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  text-decoration: none;
  color: $gray-600;
  border-radius: $radius-full;
  transition: all $transition-fast;
  position: relative;

  &:hover {
    color: $primary;
    background: $primary-light;
    transform: rotate(90deg);
  }

  &:focus-visible {
    outline: 2px solid $primary;
    outline-offset: 2px;
  }

  &.router-link-active,
  &[aria-current="page"] {
    color: $primary;
    background: $primary-light;
  }

  .settings-icon {
    font-size: $font-size-2xl;
    line-height: 1;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-md $spacing-xl;
  text-decoration: none;
  color: $gray-600;
  font-size: $font-size-base;
  font-weight: $font-weight-medium;
  border-radius: $radius-lg;
  transition: all $transition-fast;
  position: relative;

  &:hover {
    color: $primary;
    background: $primary-light;
  }

  &:focus-visible {
    outline: 2px solid $primary;
    outline-offset: 2px;
  }

  // Active state (current page)
  &.router-link-active,
  &[aria-current="page"] {
    color: $primary;
    background: $primary-light;
    font-weight: $font-weight-semibold;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 3px;
      background: $primary;
      border-radius: $radius-sm $radius-sm 0 0;
    }
  }

  .nav-icon {
    font-size: $font-size-lg;
    line-height: 1;
  }

  .nav-text {
    font-size: $font-size-base;
  }
}

// Responsive Design
@media (max-width: $breakpoint-sm) {
  .nav-container {
    height: 60px;
    padding: 0 $spacing-lg;
  }

  .nav-brand {
    .brand-link h1 {
      font-size: $font-size-xl;
    }
  }

  .nav-content {
    gap: $spacing-xl;
  }

  .nav-links {
    gap: $spacing-xs;
  }

  .nav-link {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-sm;

    .nav-icon {
      font-size: $font-size-base;
    }

    .nav-text {
      font-size: $font-size-sm;
    }
  }

  .nav-actions {
    padding-left: $spacing-md;
  }

  .settings-link {
    width: 40px;
    height: 40px;

    .settings-icon {
      font-size: $font-size-xl;
    }
  }
}

@media (max-width: $breakpoint-xs) {
  .nav-content {
    gap: $spacing-md;
  }

  .nav-link {
    padding: $spacing-sm;

    .nav-text {
      display: none;
    }

    .nav-icon {
      font-size: $font-size-xl;
    }
  }

  .nav-actions {
    padding-left: $spacing-sm;
  }

  .settings-link {
    width: 36px;
    height: 36px;

    .settings-icon {
      font-size: $font-size-lg;
    }
  }
}
</style>

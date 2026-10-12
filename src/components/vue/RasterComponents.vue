<template>
  <div class="raster-components-bundle">
    <!-- Stat Card Example -->
    <div class="raster-card">
      <div class="raster-stat">
        <div class="raster-stat-label">
          <span>{{ label }}</span>
          <span v-if="index" class="raster-mono">[{{ index }}]</span>
        </div>
        <div class="raster-stat-value">{{ value }}</div>
        <div v-if="subtext || delta" class="raster-stat-sub">
          <span v-if="delta" :class="['raster-delta', deltaPositive ? 'raster-delta-positive' : 'raster-delta-negative']">
            {{ delta }}
          </span>
          <span v-if="subtext">{{ subtext }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  subtext: { type: String, default: '' },
  delta: { type: String, default: '' },
  deltaPositive: { type: Boolean, default: true },
  index: { type: String, default: '' }
});
</script>

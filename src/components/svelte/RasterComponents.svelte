<script>
  export let label = '';
  export let value = '';
  export let subtext = '';
  export let delta = '';
  export let deltaPositive = true;
  export let index = '';
</script>

<div class="raster-card">
  <div class="raster-stat">
    <div class="raster-stat-label">
      <span>{label}</span>
      {#if index}<span class="raster-mono">[{index}]</span>{/if}
    </div>
    <div class="raster-stat-value">{value}</div>
    {#if subtext || delta}
      <div class="raster-stat-sub">
        {#if delta}
          <span class="raster-delta {deltaPositive ? 'raster-delta-positive' : 'raster-delta-negative'}">
            {delta}
          </span>
        {/if}
        {#if subtext}<span>{subtext}</span>{/if}
      </div>
    {/if}
  </div>
</div>

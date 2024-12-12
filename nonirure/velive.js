return span >= max - min ? [min, max] : [lo = Math.min(Math.max(lo, min), max - span), lo + span];

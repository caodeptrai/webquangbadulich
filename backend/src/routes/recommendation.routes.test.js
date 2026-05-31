const recommendationRoutes = require('./recommendation.routes');

const {
  normalizeCategorySlugs,
  parseEstimatedCostRange,
  isBudgetMatch,
} = recommendationRoutes._test;

describe('recommendation filter helpers', () => {
  test('normalizes legacy category aliases used by the UI', () => {
    expect(normalizeCategorySlugs(['bien', 'di-tich', 'nui-rung', 'thien-nhien', 'bien'])).toEqual([
      'bien-dao',
      'di-san',
      'nui-rung',
      'thien-nhien',
    ]);
  });

  test('parses displayed Vietnamese estimated cost ranges', () => {
    expect(parseEstimatedCostRange('1.500.000 - 3.000.000')).toEqual({ min: 1500000, max: 3000000 });
    expect(parseEstimatedCostRange('800.000 - 2.500.000')).toEqual({ min: 800000, max: 2500000 });
  });

  test('matches budget buckets from parsed cost ranges', () => {
    expect(isBudgetMatch('800.000 - 2.500.000', 'low')).toBe(true);
    expect(isBudgetMatch('1.500.000 - 3.000.000', 'medium')).toBe(true);
    expect(isBudgetMatch('3.000.000 - 8.000.000', 'high')).toBe(true);
    expect(isBudgetMatch('3.000.000 - 8.000.000', 'low')).toBe(false);
  });
});

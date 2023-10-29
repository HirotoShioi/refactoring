import { describe, expect, it } from '@jest/globals';
import { score } from '../../src/chapter-11/replace-function-with-command';

describe('score', () => {
  it('returns the score', () => {
    const candidate = {
      originState: 'FL',
    };
    const medicalExam = {
      isSmoker: true,
    };
    const scoringGuide = {
      stateWithLowCertification: () => true,
    };
    const result = score(candidate, medicalExam, scoringGuide);
    expect(result).toBe(-10);
  });
  it('returns the score', () => {
    const candidate = {
      originState: 'FL',
    };
    const medicalExam = {
      isSmoker: false,
    };
    const scoringGuide = {
      stateWithLowCertification: () => false,
    };
    const result = score(candidate, medicalExam, scoringGuide);
    expect(result).toBe(0);
  });
});

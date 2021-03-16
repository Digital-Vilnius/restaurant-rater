import { ReviewsTypes } from 'features/reviews/types';
import { ReviewsService } from 'api';

export function getReviews(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: ReviewsTypes.GET_REVIEWS_START });
      const { result, count } = await ReviewsService.getReviews(request);
      dispatch({ type: ReviewsTypes.GET_REVIEWS, payload: { reviews: result, count } });
    } catch (exception) {
      dispatch({ type: ReviewsTypes.GET_REVIEWS_ERROR });
    }
  };
}

export function refreshReviews(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: ReviewsTypes.REFRESH_REVIEWS_START });
      const { result, count } = await ReviewsService.getReviews(request);
      dispatch({ type: ReviewsTypes.REFRESH_REVIEWS, payload: { reviews: result, count } });
    } catch (exception) {
      dispatch({ type: ReviewsTypes.REFRESH_REVIEWS_ERROR });
    }
  };
}

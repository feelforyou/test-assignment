import { useEffect, useReducer } from 'react';

export const HttpStatusE = {
  CREATED: 201,
  BAD_REQUEST: 400,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isFirstRequestLoaded: true,
        error: null,
        data: action.payload?.data,
        fullResponse: action.payload,
      };
    default:
      return state;
  }
};

export const useDataFetch = ({
  fetchHandler,
  initialData,
  onError,
  onSuccess,
  isLoadingInitial = false,
  isLazy,
}) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: initialData,
    isLoading: isLoadingInitial,
    error: null,
    fullResponse: null,
    isFirstRequestLoaded: false,
  });

  const requestWorker = async (fetchPromise, didCancel = false) => {
    dispatch({ type: 'FETCH_INIT', payload: null });

    try {
      const response = await fetchPromise;

      const responseData = response?.json ? await response?.json() : null;

      const responsePayload = {
        data: responseData,
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
      };

      if (!didCancel) {
        onSuccess?.(responsePayload);

        dispatch({ type: 'FETCH_SUCCESS', payload: responsePayload });
      }
    } catch (error) {
      if (!didCancel) {
        onError?.(error);

        dispatch({ type: 'FETCH_FAILURE', payload: error });
      }
    }
  };

  const fetchApi = (...props) => requestWorker(fetchHandler(...props));

  useEffect(() => {
    let didCancel = false;

    if (!isLazy && !didCancel) {
      requestWorker(fetchHandler(), didCancel);
    }

    return () => {
      didCancel = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state, fetchApi];
};

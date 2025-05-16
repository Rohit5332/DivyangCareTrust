import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  // Skip loading indicator for certain requests
  if (req.url.includes('assets/') || req.url.includes('api/')) {
    return next(req);
  }

  const loadingService = inject(LoadingService);
  loadingService.setLoading(true);

  return next(req).pipe(
    finalize(() => {
      loadingService.setLoading(false);
    })
  );
}; 
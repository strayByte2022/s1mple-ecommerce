import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<any>({ req, res });
  await supabase.auth.getSession();
  return res;
}
// middleware function is a function that runs before the request is processed by the server. 
// It can be used to add custom logic to the request processing pipeline.
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { success: false, error: "Missing Supabase configuration environment variables." },
      { status: 500 }
    );
  }

  try {
    // 1. Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // 2. Query the Supabase REST API directly
    // Hitting the REST API root endpoint triggers PostgREST to query the database's schema dictionary,
    // which generates database traffic and keeps the instance active.
    const startTime = Date.now();
    const res = await fetch(`${supabaseUrl}/rest/v1/`, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    });

    const duration = Date.now() - startTime;

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { 
          success: false, 
          error: `Supabase REST API returned status ${res.status}`, 
          details: errorText 
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Supabase connection verified and kept alive successfully.",
      latency_ms: duration,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to connect to Supabase database.", 
        message: error.message || String(error) 
      },
      { status: 500 }
    );
  }
}

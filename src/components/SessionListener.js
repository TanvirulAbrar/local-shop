"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function SessionListener() {
  const { data: session, status } = useSession();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (status === "authenticated" && firstLoad.current) {
      toast.success(
        `Welcome back, ${session.user.name || session.user.email}!`
      );
      firstLoad.current = false; // avoid multiple toasts on re-renders
    }
  }, [status, session]);

  return null;
}

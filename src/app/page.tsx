"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
//import { nhost } from '@/lib/nhost';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); // Static redirection to "/home"
  }, [router]);

  return null;
};

export default Page;

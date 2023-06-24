import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


function useKeyboardShortcuts() {
    const router = useRouter();
  
    useEffect(() => {
      function handleKeyDown(event) {
        if (event.ctrlKey) {
          switch (event.key) {
            case 'h':
                router.push('/');
                break;
            case 'a':
              router.push('/about');
              break;
            case 'e':
              router.push('/experiences');
              break;
            case 'p':
              router.push('/projects');
              break;
            case 'g':
              router.push('/guestbook');
              break;
            default:
                console.log(event.keyCode);
              break;
          }
        }
      }
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [router]);
}


export default useKeyboardShortcuts;
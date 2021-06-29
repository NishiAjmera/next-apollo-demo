import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
    Welcome, 
    <br/><br/>
    <Link href="/users"><a>List of Users</a></Link>
    <br/><br/>
    <Link href="/about"><a>About</a></Link>
    </div>
  )
}

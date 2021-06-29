import Link from 'next/link';
import React from 'react';
const Page = () => (
    <div>
    Welcome, 
    <br/><br/>
    <Link href="/users"><a>List of Users</a></Link>
    <br/><br/>
    <Link href="/about"><a>About</a></Link>
    </div>
)

export default Page;




import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const FRAMES_URL = process.env.FRAMES_URL 
const imageUrl = new URL("/og/hello", FRAMES_URL).href
const postUrl = new URL("/frame", FRAMES_URL).href


const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'not doing anything', action: 'post'},
  ],
  image: imageUrl,
  post_url: postUrl,
});

export const metadata: Metadata = {
  title: 'hello',
  description: 'A page having a frame meta tag for hello',
  openGraph: {
    title: 'gm',
    description: 'A page having a frame meta tag for hello',
    images: [imageUrl],
  },
  other: {
    'of:accepts:xmtp': '2024-02-01',
    ...frameMetadata,
  },
};



export default async function Page() {
      return (<div>Hello, user name frames!!</div>)
}
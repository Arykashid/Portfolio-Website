import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDEICUivY938KWpD12eZxtAoIyivO6HNMv8lgmudDDLMQ0TJCnK1PY2Af52im5aoP4escEAUCgepnhnb94jDAfptYclsHJSb7owjAYyp9Yb3VA-aDcyUkeLMM8LhMSZpU7lGYsnuMUC9jhIxqBZegDC9bpN_vMTGcC3V9boEnthcNhh7mtOgPF7iZz446xWX26CpdGI49_ABb0VB9MxG1R6DY3ZPvAYwlA2UuFCM_ThLnt5ilVQBCK7zUjozZQg2Vfkw',
    dest: 'public/images/ary-hero-profile.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1UmYSpMvnCd6foTHDT4qrbiTKlL9X6UcPlHEl5Ul-6rr9OCP9nsFJsBenf0tf5lCl-bfD1DBClLqlFnYlTmPn66Mp-5NYs0QohKQEUudqpWthts7rmnbK-059H8zaHKRt8Od17Pw-vqO0O-Rg4K7ewcnAZBBEXniMLng9dA7lBJzfPUhrDfppXJZEvHI6tpiUujoJSWx_OOdPWJak-OomEX2qm-G1qNT4WgPp2j9D30E4byz89oyh78omyw9yvLyZF0w-VmZ-w5rg',
    dest: 'public/images/ary-portrait-real.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDavgA240rEvKxB1Raec-a9kyCdyXMqGRVHH4ReQM1yhmyLSr5tP9mj-QVNZGA38m2w3fiJXmykrKL4CYBDW-EZA5Msg9Zxgl6XR_VOmD9QsBkLaTPXRnoyKY_cvLDYSjFfUWI6hjHJdj7rc5hSgAlOJvI0cFuTE7fcVY1E27wi0j7ksk7E8WpQgm_0ueLBxRKOGhGTVrL55Ier6GX4EFr3UnIswmzbTTR0QD2aBHJdXcLSXU7Om01r75W5not4gqg8DA',
    dest: 'public/images/crashguard-ai.png'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJQpfD-nyM8Q2JaCcDJy4mRrZBJSdghUMXVpY_7L-jlvxwXghRVciJjhQei-bRYXQsOiYrqiTXggl4fqYJR4fLz4nMyPpHuNd8OGZVlPRhzLlOrIg04q05DoMkQwBYR9B07Rl07bryr5vXx1UKK1xKWNywFnEOknLK0Mu5XntEHt0rE7gM71Kdq7RTrj-_BOchsu6D8kQ5G-L1Xu4zkhcC3qiwK-aYnpj0c5FUU3pttFT4XFbEs2VLB18gBcRUHYx6YA',
    dest: 'public/images/rag-teaching-assistant.png'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1UGzPktNBNRtzYzpcUOqoPxUOzKjE3dh6SNSmayu-e9PJs0gFna5-EnA26yUS_wPTOrVHEA1WErO9NA9j_TeInbuFsM4KpDQEsELmskKZntfybfsIPjk0yem4jgh7GGyeSDGc2cnq29_k8DWk_TfoykjsVMfzpHI1sa_dDDat_cdQWQxCjK7fyYjiL0Y5XY9dVTGLzO-ExZJfPupIbleQFlotD_gc1AP7wORX8QPs-N9XnsGCqGpPlwAw',
    dest: 'public/images/studio-monogram.png'
  }
];

fs.mkdirSync('public/images', { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const img of images) {
    try {
      await download(img.url, img.dest);
    } catch (e) {
      console.error(`Error downloading ${img.url}:`, e);
    }
  }
  console.log('Finished downloading all assets.');
}

run();

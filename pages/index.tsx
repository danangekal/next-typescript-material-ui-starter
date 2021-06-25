import Image from 'next/image';
import { makeStyles, Theme, Box, Typography } from '@material-ui/core';

import Nav from 'components/nav';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    textAlign: 'center',
    '& a': {
      color: '#0070f3',
      textDecoration: 'none',
    },
    '& a:hover, & a:focus, & a:active': {
      textDecoration: 'underline',
    },
  },
  description: {
    textAlign: 'center',
    '& code': {
      background: '#fafafa',
      borderRadius: '5px',
      padding: '0.25rem',
    },
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '& a': {
      margin: '1rem',
      padding: '1.5rem',
      width: '300px',
      flexGrow: '1',
      flexShrink: '0',
      textAlign: 'left',
      color: 'inherit',
      textDecoration: 'none',
      border: '1px solid #eaeaea',
      borderRadius: '10px',
      transition: 'color 0.15s ease, border-color 0.15s ease',
    },
    '& a:hover, a:focus, a:active': {
      color: '#0070f3',
      borderColor: '#0070f3',
    },
    '& h3': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem',
    },
    '& p': {
      margin: '0',
      fontSize: '1.25rem',
      lineHeight: '1.5',
    },
  },
  footer: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box
      minHeight="100vh"
      padding="0 0.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Nav />

      <Box
        padding="5rem 0"
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2" component="h1" className={classes.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a>
          {' + '}
          <a
            href="https://www.typescriptlang.org/"
            className="text-blue-600 no-underline hover:underline focus:underline active:underline"
          >
            Typescript
          </a>
          {' + '}
          <a href="https://material-ui.com">Material UI!</a>
        </Typography>

        <Typography variant="h5" component="p" className={classes.description}>
          Get started by editing <code>pages/index.tsx</code>
        </Typography>

        <Box
          maxWidth="800px"
          marginTop="3rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          className={classes.grid}
        >
          <a href="https://nextjs.org/docs">
            <Typography variant="h4" component="h3">
              Documentation &rarr;
            </Typography>
            <Typography variant="body2" component="p">
              Find in-depth information about Next.js features and API.
            </Typography>
          </a>

          <a href="https://nextjs.org/learn">
            <Typography variant="h4" component="h3">
              Learn &rarr;
            </Typography>
            <Typography variant="body2" component="p">
              Learn about Next.js in an interactive course with quizzes!
            </Typography>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples">
            <Typography variant="h4" component="h3">
              Examples &rarr;
            </Typography>
            <Typography variant="body2" component="p">
              Discover and deploy boilerplate example Next.js projects.
            </Typography>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Typography variant="h4" component="h3">
              Deploy &rarr;
            </Typography>
            <Typography variant="body2" component="p">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Typography>
          </a>
        </Box>
      </Box>

      <Box
        width="100%"
        height="100px"
        borderTop="1px solid #eaeaea"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.footer}
      >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={70} height={70} />
        </a>
      </Box>
    </Box>
  );
}

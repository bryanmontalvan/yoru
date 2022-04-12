import React from 'react';
import { createStyles, Container, Text, Button, Group, useMantineTheme } from '@mantine/core';
import Link from 'next/link'

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.black : theme.white,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  githubControl: {
    borderWidth: 2,
    color: theme.colors.dark[0],
    borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[0],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

    '&:hover': {
      backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
        } !important`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
    },
  },
}));

export default function Home() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  
  return (
    <div className={classes.wrapper} className={classes.root}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            fully featured
          </Text>{' '}
          calender availability tool
        </h1>

        <Text className={classes.description} color="dimmed">
          A centralized calender with the aim of making event planning so much easier - With the feature of import prexisting calenders you may use
        </Text>

        <Group className={classes.controls}>
          <Link href="/login" >
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Get started
            </Button>
          </Link>

          <Button
            component="a"
            href="https://github.com/bryanmontalvan/yoru"
            size="xl"
            variant="outline"
            className={cx(classes.control, classes.githubControl)}
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
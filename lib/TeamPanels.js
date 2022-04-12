import React from 'react';
import { createStyles, Avatar, Text, Group, Center } from '@mantine/core';
import { BrandGithub, At } from 'tabler-icons-react';


const useStyles = createStyles((theme) => ({
	icon: {
		color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
	},

	name: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}));


export function DevInfo({ devs }) {
	const { classes } = useStyles();
	return (
	  <Center>
		{devs.map((dev) => (
		<Group mx="md" my="xl" key={dev.name}noWrap>
		  <Avatar src={dev.avatar} size={94} radius="md" />
		  <div>
			<Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
			  {dev.title}
			</Text>

			<Text size="lg" weight={500} className={classes.name}>
			  {dev.name}
			</Text>
  
			<Group noWrap spacing={10} mt={3}>
			  <At size={16} className={classes.icon} />
			  <Text size="xs" color="dimmed">
				{dev.email}
			  </Text>
			</Group>
  
			<Group noWrap spacing={10} mt={5}>
			  <BrandGithub size={16} className={classes.icon} />
			  <Text size="xs" color="dimmed" component="a" svarient="link" href={dev.ghlink}>
				{dev.github}
			  </Text>
			</Group>
		  </div>
		</Group>
		))}
	  </Center>
	);
  }

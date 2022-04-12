import { Timeline, Text } from '@mantine/core';
import { GitBranch, GitPullRequest, GitCommit, MessageDots } from 'tabler-icons-react';

export function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={8}>
      <Timeline.Item bullet={<GitBranch size={12} />} title="Concept created">
        <Text color="dimmed" size="sm">Yoru as a concept was created informally</Text>
        <Text size="xs" mt={4}>August 2021</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<GitCommit size={12} />} title="Project instantiated">
        <Text color="dimmed" size="sm">GitHub repo for Yoru was created, basic</Text>
        <Text size="xs" mt={4}>September 2021</Text>
      </Timeline.Item>

      <Timeline.Item title="Rebirth" bullet={<GitPullRequest size={12} />} lineVariant="dashed">
        <Text color="dimmed" size="sm">Continuation on working on Yoru has been decided, so thus this webpage has been created</Text>
        <Text size="xs" mt={4}>April 2022</Text>
      </Timeline.Item>

      <Timeline.Item title="Yoru Deployment" bullet={<MessageDots size={12} />}>
        <Text color="dimmed" size="sm">We plan and intend to deploy a usable version of Yoru soon</Text>
        <Text size="xs" mt={4}>??</Text>
      </Timeline.Item>
    </Timeline>
  );
}
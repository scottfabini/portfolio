import React, { useState } from 'react';
import { Flex, View } from '@adobe/react-spectrum';
import Beaker from '@spectrum-icons/workflow/Beaker';

export default function Spectrum() {
  return (
    <>
      <Flex direction="column" gap="size-10">
        <Beaker />
        Text
      </Flex>

      <View borderRadius="medium" backgroundColor="celery-600" height="size-800" />
      <View maxWidth="100%" backgroundColor="blue-600" height="size-800" />
      <View backgroundColor="magenta-600" height="size-800" />
    </>
  );
}

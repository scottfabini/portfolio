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
    // <div width="100%">
    //   <span>Spectrum</span>
    //   <Flex direction="column" marginX="0" gap="size-100">
    //     <View backgroundColor="celery-600" height="size-800" />
    //     <Flex direction="row" height="size-3000" gap="size-100">
    //       <View backgroundColor="indigo-600" width="size-2000" />
    //       <View backgroundColor="seafoam-600" flex />
    //     </Flex>
    //     <View backgroundColor="magenta-600" height="size-800" />
    //   </Flex>
    //   <Header>
    //     <Beaker></Beaker>
    //     Scott Fabini
    //   </Header>
    //   <ActionButton margin="size-200">I'm a light button</ActionButton>
    //   <Provider colorScheme="dark">
    //     <ActionButton margin="size-200">I'm a dark button</ActionButton>
    //     <Breadcrumbs>
    //       <Item key="home">Home</Item>
    //       <Item key="trendy">Trendy</Item>
    //       <Item key="march 2020 assets">March 2020 Assets</Item>
    //     </Breadcrumbs>
    //   </Provider>
    // </div>
  );
}

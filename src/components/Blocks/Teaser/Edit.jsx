import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import TeaserSidebar from './TeaserSidebar';
import TeaserBody from './TeaserBody';

const Edit = ({ data, onChangeBlock, block, selected, properties }) => {
  return (
    <>
      <TeaserBody data={data} properties={properties} id={block} isEditMode />
      <SidebarPortal selected={selected}>
        <TeaserSidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
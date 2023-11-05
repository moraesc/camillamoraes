import React from 'react';
import { WorkItem } from './WorkItem';

export const Work = () => {
    return <div className='flex flex-col gap-12'>
      <WorkItem company='Sound.xyz' role='Software Engineer' description='Frontend Engineering helping build a music NFT platform. Frontend Engineering helping build a music NFT platform.  Frontend Engineering helping build a music NFT platform.  Frontend Engineering helping build a music NFT platform. '/>
      <WorkItem company='Amazon Web Services' role='Cloud Application Developer' description='Architected and developed applications for customers hosted on AWS. Architected and developed applications for customers hosted on AWS. Architected and developed applications for customers hosted on AWS. Architected and developed applications for customers hosted on AWS.' />
    </div>
}
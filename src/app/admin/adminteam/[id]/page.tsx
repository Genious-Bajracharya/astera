'use client';

import UpdateTeamMemberForm from '@/components/admin/forms/updateTeamMemberForm';
import { useParams } from 'next/navigation';

export default function EditTeamPage() {
  const params = useParams();
  const { id } = params;

  if (!id || typeof id !== 'string') return <p>Invalid team member ID</p>;

  return <UpdateTeamMemberForm memberId={id} />;
}

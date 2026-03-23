export const dynamic = 'force-dynamic';

import BlogEditor from '@/components/admin/BlogEditor';

export default function EditBlogPage({ params }) {
  return <BlogEditor blogId={params.id} />;
}

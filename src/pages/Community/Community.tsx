import { Card, Button, Input, List, Form } from 'antd';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { useAddCommentOnPostMutation, useAddPostMutation, useGetPostsQuery } from '../../redux/features/Community/communityApi';
const { TextArea } = Input;

// Define the type for a post
type Post = {
    id: string;
    content: string;
};

const Community = () => {
    const { control, handleSubmit, reset } = useForm();
    const { data: posts, isLoading } = useGetPostsQuery({});
    const [addPost, { isLoading: isAddingPost }] = useAddPostMutation();
    const [addComment, { isLoading: isAddingComment }] = useAddCommentOnPostMutation();

    const onSubmit = (data: FieldValues) => {
        addPost({ content: data.newPostContent as string });
        reset();
    }

    const onComment = (postId: string, data: FieldValues) => {
        addComment({ postId, comment: data.newCommentContent as string });
        reset();
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Form onFinish={handleSubmit(onSubmit)}>
                <Controller
                    name="newPostContent"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextArea {...field} />}
                />
                <Button loading={isAddingPost} htmlType="submit">Post</Button>
            </Form>
            <List
                itemLayout="vertical"
                dataSource={posts}
                renderItem={(post: Post) => (
                    <List.Item key={post.id}>
                        <Card>
                            <p>{post.content}</p>
                            <Form onFinish={handleSubmit((data) => onComment(post.id, data))}>
                                <Controller
                                    name="newCommentContent"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <TextArea {...field} />}
                                />
                                <Button loading={isAddingComment} htmlType="submit">Comment</Button>
                            </Form>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Community;
export interface Block {
    block_id: number;
    block_type_id: number;
    title: string;
    text: string;
    completed: boolean;
    created_at: Date;
    due_date: Date;
}
import Header from "../navigation/Header";
import DetailsBody from "../components/detailsView/DetailsBody";

import { useParams } from "react-router";

const DetailsPage = () => {
    const params = useParams();

    // const [todoItem, setTodoItem] = useState<TodoItem>({
    //     id: '1',
    //     title: 'This is the test title',
    //     description: 'Test description',
    //     completed: false,
    //     tags: ['test', 'abc'],
    //     reminderDate: new Date(),
    // });

    return (
        <div className="flex justify-between items-start">
            <Header />
            <DetailsBody todoItemId={params.id!} />
        </div>
    );
};

export default DetailsPage;
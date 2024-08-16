import { ChangeEvent, useEffect, useState } from "react";
import { Button,  Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponents from "../../../app/layout/LoaadingComponent";
import { v4 as uuid } from "uuid";
import { Formik, Form, Field, FormikHelpers, FormikValues } from "formik";


export default observer(function ActivityForm() {

    const { activityStore } = useStore();

    const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        date: '',
        city: '',
        description: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    });

    // function handlSubmit() {
    //     if (!activity.id) {
    //         activity.id = uuid();
    //         createActivity(activity).then(()=>navigate(`/activities/${activity.id}`));
    //     }
    //     else
    //         updateActivity(activity).then(()=>navigate(`/activities/${activity.id}`));

    // }

    // function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    //     const { name, value } = event.target;
    //     setActivity({ ...activity, [name]: value })
    // }

    if (loadingInitial) return <LoadingComponents content="Loading activity ..." />

    return (
        <Segment clearing>
            <Formik enableReinitialize initialValues={activity} onSubmit={values => console.log(values)}>
                {({ values: activity, handleChange, handleSubmit }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                        <Field placeholder='Title' value={activity.title} name='title' onChange={handleChange} />
                        <Field placeholder='Description' value={activity.description} name='description' onChange={handleChange} />
                        <Field placeholder='Category' value={activity.category} name='category' onChange={handleChange} />
                        <Field type='date' placeholder='Date' value={activity.date} name='date' onChange={handleChange} />
                        <Field placeholder='City' value={activity.city} name='city' onChange={handleChange} />
                        <Field placeholder='Venue' value={activity.venue} name='venue' onChange={handleChange} />
                        <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
})
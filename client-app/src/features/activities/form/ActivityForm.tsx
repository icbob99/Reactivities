import { useEffect, useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity, ActivityFormValues } from "../../../app/models/activity";
import LoadingComponents from "../../../app/layout/LoaadingComponent";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextAreaInput";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/category";
import MyDateInput from "../../../app/common/form/MyDateInput";
import { v4 as uuid } from 'uuid';

const ActivityForm = observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { loadActivity, loadingInitial, createActivity, updateActivity } = activityStore;
    const { id } = useParams();
    const navigate = useNavigate();
    const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    console.log(`Activity: ${activity.id}`);

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required('The activity category is required'),
        date: Yup.string().required('The activity date is required'),
        city: Yup.string().required('The activity city is required'),
        venue: Yup.string().required('The activity venue is required'),
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)));
    },[id, loadActivity]);

    function handlSubmit(activity: ActivityFormValues) {
        if (!activity.id) {
            const newActivity = { ...activity, id: uuid() };

            createActivity(newActivity as Activity).then(() => navigate(`/activities/${newActivity.id}`));
        }
        else
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
    }

    if (loadingInitial) return <LoadingComponents content="Loading activity ..." />

    return (
        <Segment clearing>
            <Header content='Activity Details' sub color="teal" />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize initialValues={activity}
                onSubmit={values => {
                    handlSubmit(values);
                }}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='title' placeholder="Title" />
                        <MyTextArea rows={3} placeholder='Description' name='description' />
                        <MySelectInput options={categoryOptions} placeholder='Category' name='category' />
                        <MyDateInput
                            name='date'
                            label='Date'
                            placeholderText="Date"
                            showTimeSelect
                            timeCaption="time"
                            dateFormat='MMMM d, yyyy h:mm aa'
                        />

                        <Header content='Locaton Details' sub color="teal" />
                        <MyTextInput placeholder='City' name='city' />
                        <MyTextInput placeholder='Venue' name='venue' />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting} floated='right' positive type='submit' content='Submit' />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
})

export default ActivityForm;
ActivityForm.displayName = "ActivityForm";
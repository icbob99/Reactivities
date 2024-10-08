import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Grid, GridColumn, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponents from "../../../app/layout/LoaadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSideBar from "./ActivityDetailedSidebar";
import ActivityDetailedHeader from "./ActivityDetailedHeader";





export default observer(function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponents />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity}></ActivityDetailedHeader>
                <ActivityDetailedInfo activity={activity}></ActivityDetailedInfo>
                <ActivityDetailedChat></ActivityDetailedChat>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSideBar></ActivityDetailedSideBar>
            </Grid.Column>
        </Grid>
    )
})
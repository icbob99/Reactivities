import { Link } from "react-router-dom"
import { Button, Icon, Item, Label, Segment, SegmentGroup } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"
import { format } from "date-fns"
import ActivityListItemAttendee from "./ActivityListItemAttendee"

interface Props {
    activity: Activity
}


export default function ActivityListItem({ activity }: Props) {

    return (
        <SegmentGroup>
            {activity.isCancelled &&
                <Label
                    attached="top"
                    style={{ textAlign: 'center', width: '100%' }}
                    color='red' content='Cancelled' />
            }
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image style={{marginBottom:3}} size="tiny" circular src='/assets/user.png'></Item.Image>
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by {activity.host?.displayName}</Item.Description>
                            {activity.isHost && (
                                <Item.Description>
                                    <Label basic color='orange' content='You are hosting this activity' />
                                </Item.Description>
                            )}
                            {activity.isGoing && !activity.isHost && (
                                <Item.Description>
                                    <Label basic color='green' content='You are going to this activity' />
                                </Item.Description>
                            )}
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" /> {format(activity.date!, 'dd MM yyyy h:mm aa')}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendee attendees={activity.attendees!} />
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link} to={`/activities/${activity.id}`}
                    color="teal"
                    floated="right"
                    content='View'
                ></Button>
            </Segment>
        </SegmentGroup>
    )
}
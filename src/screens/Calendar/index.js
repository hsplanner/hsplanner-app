/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
  Modal
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import WeekView, {createFixedWeekDate} from 'react-native-week-view';
import { Menu, Title } from '../../components';
import { colors } from '../../styles/colors';
import { Header, WrapperModalContent } from './styles';

const generateDates = (hours, minutes) => {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  if (minutes != null) {
    date.setMinutes(minutes);
  }
  return date;
};

const sampleEvents = [
  {
    id: 1,
    description: 'Event 1',
    startDate: generateDates(0),
    endDate: generateDates(2),
    color: 'blue',
  },
  {
    id: 2,
    description: 'Event 2',
    startDate: generateDates(1),
    endDate: generateDates(4),
    color: 'red',
  },
  {
    id: 3,
    description: 'Event 3',
    startDate: generateDates(-5),
    endDate: generateDates(-3),
    color: 'green',
  },
];

const sampleFixedEvents = [
  {
    id: 1,
    description: 'Event 1',
    startDate: createFixedWeekDate('Monday', 12),
    endDate: createFixedWeekDate(1, 14),
    color: 'blue',
  },
  {
    id: 2,
    description: 'Event 2',
    startDate: createFixedWeekDate('wed', 16),
    endDate: createFixedWeekDate(3, 17, 30),
    color: 'red',
  },
];

// For debugging purposes
const showFixedComponent = false;

const MyRefreshComponent = ({style}) => (
  // Just an example
  <ActivityIndicator style={style} color="red" size="large" />
);

export const Calendar = ({ route }) => {
  const [modalAddEventVisible, setModalAddEventVisible] = useState(false)
  const [eventInitialData, event] = useState(false)


  const { item } = route.params;

  console.log('itemINcalendar', item)
  const [events, setEvents] = useState(showFixedComponent ? sampleFixedEvents : sampleEvents)
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onEventPress = ({id, color, startDate, endDate}) => {
    Alert.alert(
      `event ${color} - ${id}`,
      `start: ${startDate}\nend: ${endDate}`,
    );
  };

  const onGridClick = (event, startHour, date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // zero-based
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  /*   day, hours, minutes = 0, seconds = 0 */
    setModalAddEventVisible(true)
   /*  Alert.alert(`HERE${year}-${month}-${day} ${hour}:${minutes}:${seconds}`);  */
  };

  const onDragEvent = (event, newStartDate, newEndDate) => {
    // Here you should update the event in your DB with the new date and hour
    setEvents([
      ...events.filter(e => e.id !== event.id),
      {
        ...event,
        startDate: newStartDate,
        endDate: newEndDate,
      },
    ])
  };

  const onDayPress = (date, formattedDate) => {
    console.log('Day: ', date, formattedDate);
  };

  const onMonthPress = (date, formattedDate) => {
    console.log('Month: ', date, formattedDate);
  };
  /*   const {events, selectedDate} = this.state; */
  console.log("events", events)
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Header>
          <Menu />
          <Title ml={25}>{item.title}</Title>
        </Header>
        <SafeAreaView style={styles.container}>
          <WeekView
            ref={r => {
              componentRef = r;
            }}
            events={events}
            selectedDate={selectedDate}
            numberOfDays={7}
            onEventPress={onEventPress}
            onGridClick={onGridClick}
            headerStyle={styles.header}
            headerTextStyle={styles.headerText}
            hourTextStyle={styles.hourText}
            eventContainerStyle={styles.eventContainer}
            gridColumnStyle={styles.gridColumn}
            gridRowStyle={styles.gridRow}
            formatDateHeader={showFixedComponent ? 'ddd' : 'ddd DD'}
            hoursInDisplay={12}
            timeStep={60}
            startHour={8}
            fixedHorizontally={showFixedComponent}
            showTitle={!showFixedComponent}
            showNowLine
            onDragEvent={onDragEvent}
            isRefreshing={false}
            RefreshComponent={MyRefreshComponent}
            onDayPress={onDayPress}
            onMonthPress={onMonthPress}
          />
          <Modal visible={modalAddEventVisible}>
            <WrapperModalContent>
              <HeaderModal>
                <Title>Adicionar Planner</Title>
                <MaterialCommunityIcon
                  name="close"
                  size={35}
                  color={colors.blueDark}
                  onPress={() => setModalAddEventVisible(false)}
                  />
              </HeaderModal>
            </WrapperModalContent>
          </Modal>
        </SafeAreaView>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#4286f4',
    borderColor: '#fff',
  },
  headerText: {
    color: 'white',
  },
  hourText: {
    color: 'black',
  },
  eventContainer: {
    borderWidth: 1,
    borderColor: 'black',
  },
  gridRow: {
    borderTopWidth: 1,
    borderColor: '#E9EDF0',
  },
  gridColumn: {
    borderLeftWidth: 1,
    borderColor: '#E9EDF0',
  },
});

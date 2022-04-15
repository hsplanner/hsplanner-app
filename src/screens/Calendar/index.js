import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
  Modal,
  View,
  Text
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import WeekView, {createFixedWeekDate} from 'react-native-week-view';
import { Menu, Title, CustomInput, InputLabel, Button } from '../../components';
import { validationSchema } from './validationSchema';
import {Formik, Field} from 'formik';
import { colors } from '../../styles/colors';
import {
  Header,
  WrapperModalContent,
  HeaderModal,
  TitleModal,
  WrapperButtonSave,
  WrapperAddPlanner,
  WrapperModal,
  Row
} from './styles';

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

  const { item } = route.params;

  console.log('itemINcalendar', item)
  // DateTimePicker
  const [initialDate, setInitialDate] = useState(new Date(1598051730000));
  const [endDate, setEndDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChangeInitial = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setInitialDate(currentDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setEndDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  // MODAL
  const [loadingModal, setLoadingModal] = useState(false);
  const [modalEventVisible, setModalEventVisible] = useState(false)
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
   Alert.alert(`HERE${year}-${month}-${day} ${hour}:${minutes}:${seconds}`); 
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
  console.log('DatePicker', initialDate)
  async function handleSubmitForm(data) {
    console.log('dataForm!!', data);

  }

  const initialData = {
    title: '',
    description: '',
    status: '1'
  };
    return (
      <>
      <View style={{flex: 1}}>
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
        </SafeAreaView>
        <WrapperAddPlanner>
        <MaterialCommunityIcon
          name="plus"
          size={35}
          color={colors.blueDark}
          onPress={() => setModalEventVisible(true)}
          />
      
        </WrapperAddPlanner>
        </View>
      <WrapperModal>
        <Modal visible={modalEventVisible} >
          <WrapperModalContent>
          <HeaderModal>
          <Title>Adicionar Planner</Title>
          <MaterialCommunityIcon
            name="close"
            size={35}
            color={colors.blueDark}
            onPress={() => setModalEventVisible(false)}
            />
        </HeaderModal>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialData}
          onSubmit={handleSubmitForm}>
          {({
            handleSubmit,
            handleChange,
            values,
            setFieldValue,
            setFieldTouched,
            isValid,
            errors,
            touched,
            isSubmitting,
          }) => (
            <>
              <Field
                component={CustomInput}
                name="title"
                placeholder="Nome do Planner"
                label="Nome" 
                  />
              <Field
                component={CustomInput}
                name="description"
                placeholder="Descrição"
                label="Descrição" 
                    />
                
                <Row>
                  <Title mr={24} onPress={showDatepicker} >Data inicial</Title>
                  <Title onPress={showTimepicker}>Hora inicial</Title>
                </Row>
                <Text>selected: {initialDate?.toLocaleString()}</Text>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={initialDate}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChangeInitial}
                  />
                    )}
                <Row>
                  <Title mr={24} onPress={showDatepicker}>Data final</Title>
                  <Title onPress={showTimepicker}>Hora final</Title>
                </Row>
                <Text>selected: {endDate?.toLocaleString()}</Text>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={endDate}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChangeEnd}
                  />
                )} 
{/*               <InputLabel style={{marginBottom: 15, marginTop: 20}}>
                  Status
                </InputLabel>
                <RadioButton.Group
                  onValueChange={handleChange('status')}
                  value={values.status}>
                  <ContainerRadio>
                    <InputLabel>Privado</InputLabel>
                    <RadioButton value="1" />

                    <InputLabel>Público</InputLabel>
                    <RadioButton value="0" />
                  </ContainerRadio>
                </RadioButton.Group>
                {errors?.status && touched.status && (
                  <ErrorText>{errors?.status}</ErrorText>
                )} */}
              <WrapperButtonSave>
                <Button
                  text="Salvar"
                  onPress={handleSubmit}
                  loading={loadingModal}
                />
              </WrapperButtonSave>
            </>
          )}
        </Formik>
          </WrapperModalContent>
      </Modal>
        </WrapperModal>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
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

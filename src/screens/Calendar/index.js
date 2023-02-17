import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
  Modal,
  View,
  Text,
  Picker
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import WeekView, {createFixedWeekDate} from 'react-native-week-view';
import { Menu, Title, CustomInput, InputLabel, Button, CardTextLarge } from '../../components';
import { validationSchema } from './validationSchema';
import {Formik, Field} from 'formik';
import api from '../../services/api';
import { colors } from '../../styles/colors';
import {
  Header,
  WrapperModalContent,
  HeaderModal,
  TitleModal,
  WrapperButtonSave,
  WrapperAddPlanner,
  WrapperModal,
  Row,
  RowCenter
} from './styles';
import { date } from 'yup';
import { endEvent } from 'react-native/Libraries/Performance/Systrace';

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
  const [initialDate, setInitialDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [loading, setLoading] = useState(false);
    // MODAL
  const [loadingModal, setLoadingModal] = useState(false);
  const [modalEventVisible, setModalEventVisible] = useState(false)
  // const [events, setEvents] = useState(showFixedComponent ? sampleFixedEvents : sampleEvents)
  const [events, setEvents] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Select
  const [selectedValue, setSelectedValue] = useState(3);
  const [selectedColor, setSelectedColor] = useState("green");

  const getPlanner = async () => {
    try {
      setLoading(true);
      console.log("#ID", item?._id )
      const result = await api.get(`/planner/${item?._id}`);
      console.log("#resul", result)
      console.log("eventsServer!", result?.data?.events)
      const eventsResponse = result.data?.events
      console.log("response", eventsResponse)
      const eventsResponseFormatted = eventsResponse?.map((event) => ({
        id: event._id,
        description: event.description,
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate),
        color: event.color
      }))

      console.log("formatttedGetPlanner", eventsResponseFormatted)

      setEvents(eventsResponseFormatted);
      setLoading(false);
      return;
    } catch (error) {
      console.log('#erro');
      console.log('erroGetPlanner', {error});
      setLoading(false);
      return error;
    }
  };

  const onDelete = async (eventId) => {
    try {
      setLoading(true);
      console.log("chegou Delete New")
      const body = {
        plannerId : item?._id,
        eventId: eventId
      }
      console.log("bodyDelte", body)
      const result = await api.delete(`/planner/event`, {data: body});
      await getPlanner()
      console.log("resultDeleteNew", result?.data)
      setLoading(false);
      return;
    } catch (error) {
      console.log('errroDelete', {error});
      setLoading(false);
      return error;
    }
  };

  const onUpdate = async (eventId, startDate, endDate, event) => {
    try {
      setLoading(true);
      const body = {
        description: event?.description,
        color: event?.color,
        startDate,
        endDate,
        eventId: eventId
      }
      const result = await api.patch(`/event/${item?._id}`, body);
      console.log("resultUp", result?.data)

      console.log("finishUPdate")

      setLoading(false);
      return;
    } catch (error) {
      console.log("erroUpdate")

      console.log('errroDelete', {error});
      setLoading(false);
      return error;
    }
  };

  const onUpdateByForm = async (id, color, startDate, endDate, description) => {
    try {
      setLoading(true);
      const body = {
        description,
        color,
        startDate,
        endDate,
        eventId: id
      }
      const result = await api.patch(`/event/${item?._id}`, body);
      console.log("resultUp", result?.data)

      console.log("finishUPdate")

      setLoading(false);
      return;
    } catch (error) {
      console.log("erroUpdate")

      console.log('errroDelete', {error});
      setLoading(false);
      return error;
    }
  };

   useEffect(() => {
     getPlanner()
   },[])

  const onChangeInitial = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setInitialDate(currentDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow2(false);
    setEndDate(currentDate);
  };

  const showMode = (currentMode, picker) => {
    if (picker === 1) {
      setShow(true);
      setMode(currentMode);
    } else {
      setShow2(true);
      setMode(currentMode);
    }
  };

  const showDatepicker = (picker) => {
    showMode('date', picker);
  };

  const showTimepicker = (picker) => {
    showMode('time', picker);
  };


  const onEventPress = ({eventId, color, startDate, endDate, description}) => {
    Alert.alert(
      `${description}`,
      `Inicio: ${moment(startDate).format('DD/MM - h:mm a')}\nFim: ${moment(endDate).format('DD/MM - h:mm a')}`,
    [
      {
        text: 'Excluir',
        onPress: () => onDelete(eventId),
        style: 'cancel',
      },
      {
        text: 'Editar',
        onPress: () => onUpdateByForm(eventId, color, startDate, endDate, description),
        style: 'cancel',
      },
      {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    }]
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

  const onDragEvent = async (event, newStartDate, newEndDate) => {
    // Here you should update the event in your DB with the new date and hour
    await onUpdate(event.id, newStartDate, newEndDate, event )
    // setEvents([
    //   ...events.filter(e => e.id !== event.id),
    //   {
    //     ...event,
    //     startDate: newStartDate,
    //     endDate: newEndDate,
    //   },
    // ])
    await getPlanner()
  };

  const onDayPress = (date, formattedDate) => {
    console.log('Day: ', date, formattedDate);
  };

  const onMonthPress = (date, formattedDate) => {
    console.log('Month: ', date, formattedDate);
  };

  const handleSubmitForm = async (data) =>{
  
    console.log("#1")
    try {
      console.log("#2")
      setLoadingModal(true)
      const eventNew = {
        // id: 35,
        description: data.description,
        startDate: initialDate,
        endDate: endDate,
        color: selectedColor,
        plannerId: item?._id
      }
      console.log("eventNew", eventNew)
      await api.patch('/planner', eventNew);
      await getPlanner()

      // const newEventFormatted = {
      //   id: 35,
      //   description: data.description,
      //   startDate: initialDate,
      //   endDate: endDate,
      //   color: data.color,
      // }
  
      // setEvents([
      //   ...events,
      //   newEventFormatted
      // ])
      setLoadingModal(false)
    } catch (error) {
      setLoadingModal(false)
      Alert.alert(
        error?.response?.data?.message ||
        'Ocorreu um erro, tente novamente mais tarde.'
      );
    }
    setModalEventVisible(false)

  }

  const initialData = {
    title: '',
    description: '',
    status: '1'
  };
    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
         <StatusBar barStyle="dark-content" /> 
        <Header>
          <Menu />
          <Title ml={25}>{item.title}</Title>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            mode="dropdown"
          >
        <Picker.Item label="1 Dia" value={1} />
        <Picker.Item label="3 Dias" value={3} />
        <Picker.Item label="7 Dias" value={7} />
      </Picker>
        </Header>
        <SafeAreaView style={styles.container}>
          <WeekView
            // ref={r => {
            //   componentRef = r;
            // }}
            events={events}
            selectedDate={selectedDate}
            numberOfDays={selectedValue}
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
          <Title>Adicionar Atividade
          </Title>
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
              {/* <Field
                component={CustomInput}
                name="color"
                placeholder="Cor"
                label="Cor"
                autoCapitalize="none"
              /> */}
              <Field
                component={CustomInput}
                name="description"
                placeholder="Descrição"
                label="Descrição" 
              />


              <Row>
                <Text mt={5} mb={4}>
                  Cor
                </Text>
              </Row>

              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: "100%" }}
                onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}
                mode="dropdown"
              >
                <Picker.Item label="Verde" value="green"/>
                <Picker.Item label="Azul" value="blue" />
                <Picker.Item label="Vermelho" value="red" />
                <Picker.Item label="Preto" value="black" />
                <Picker.Item label="Rosa" value="pink" />
                <Picker.Item label="Magenta" value="magenta" />
                <Picker.Item label="Azul Claro" value="lightblue" />
                <Picker.Item label="Amarelo" value="yellow" />
              </Picker>
                        
                <RowCenter>
                  <Title mr={24} onPress={() => showDatepicker(1)} >Data inicial</Title>
                  <Title onPress={() => showTimepicker(1)}>Hora inicial</Title>
                </RowCenter>
                <CardTextLarge>{moment(initialDate).format('DD/MM    --   h:mm a')}</CardTextLarge>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={initialDate}
                    modal
                    mode={mode}
                    is24Hour={true}
                    onChange={onChangeInitial}    
                  />
                    )}
                <RowCenter>
                  <Title mr={24} onPress={() => showDatepicker(2)}>Data final</Title>
                  <Title onPress={() => showTimepicker(2)}>Hora final</Title>
                </RowCenter>
                <CardTextLarge>{moment(endDate).format('DD/MM    --   h:mm a')}</CardTextLarge>
                {show2 && (
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
        </SafeAreaView>
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

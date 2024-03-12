import {
  ActivityIndicator,
  Alert,
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styles} from './styles/styles.ts';
import React, {PropsWithChildren, useState} from 'react';
import {getData, isValidPincode} from '@repo/services';

export default function WeatherAPITab() {
  const [humidity, setHumidity] = useState<string | null>(null);
  const [windSpeed, setWindSpeed] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pincode, setPincode] = useState<string>('');
  const api_key = '7p+vGLV43QCM7oF2uVZb/Q==5vMs2TlvZVBUnaIa';
  let url = `https://api.api-ninjas.com/v1/weather?city=${pincode}`;
  const handleSearch = async () => {
    setIsLoading(true);
    if (pincode !== null && !isValidPincode(pincode)) {
      Alert.alert('Enter a valid pincode');
      setIsLoading(false);
      setHumidity(null);
      setWindSpeed(null);
      setTemperature(null);
      return;
    }
    let res = await getData(url, api_key);
    let data = await res.json();
    if (data.error != null) {
      Alert.alert(data.error);
      setHumidity(null);
      setWindSpeed(null);
      setTemperature(null);
      setIsLoading(false);
      return;
    }
    setHumidity(data.humidity);
    setWindSpeed(data.wind_speed);
    setTemperature(data.temp);
    setIsLoading(false);
  };
  return (
    <View style={{flex: 1}}>
      <Text>Enter a valid pincode for which you want the weather data</Text>
      <TextInput
        value={pincode}
        inputMode={'numeric'}
        onChangeText={setPincode}
        style={styles.textEditStyles}
        textAlign={'center'}
        underlineColorAndroid={'grey'}
        placeholder={'Enter Pin Code'}
      />
      <Button onPress={handleSearch} title="Fecth Data" />
      {isLoading ? (
        <ActivityIndicator
          size={'large'}
          color={'blue'}
          style={styles.loadingContainerStyle}
        />
      ) : windSpeed !== null ? (
        <View style={styles.weatherDataContainer}>
          <WeatherDataCard
            header={'Temperature(°C)'}
            data={temperature ?? ''}
          />
          <WeatherDataCard header={'Wind Speed(mph)'} data={windSpeed ?? ''} />
          <WeatherDataCard header={'Humidity(%)'} data={humidity ?? ''} />
        </View>
      ) : null}
    </View>
  );
}

type WeatherDataCardProps = PropsWithChildren<{
  header: string;
  data: string;
}>;
function WeatherDataCard({header, data}: WeatherDataCardProps) {
  return (
    <View style={styles.weatherDataCardStyle}>
      <Text style={styles.weatherDataHeaderStyle}>{header}</Text>
      <Text style={styles.weatherDataStyle}>{data}</Text>
    </View>
  );
}

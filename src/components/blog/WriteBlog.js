import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { gql, useMutation } from '@apollo/client';

import ContainerStyle from '../../styles/container';
import AppTextStyle from '../../styles/AppText';
import SharedStyle from '../../styles';
import ColorStyle from '../../styles/color';
import { Input, Button } from '../shared';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const WriteBlog = props => {

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [body, setBody] = useState('');
  const [bodyError, setBodyError] = useState('');
  const [buttonPress, setButtonPress] = useState(false);

  const CREATE_BLOG = gql`
    mutation CreateBlog($title: String!, $body: String!) {
      createBlog(title: $title, body: $body) {
        message
        title
        body
      }
    }
  `;
  const [createBlog, { data, loading: mutationLoading, error: mutationError }] = useMutation(CREATE_BLOG);

  /**
   * This function handles the onsubmit event. It triggers validation and sends data to the API
  */
  const onSubmit = async () => {
    setButtonPress(true);
    if (!title && !body) {
      setTitleError('Please enter your blog title.');
      setBodyError('Please enter your blog.');
    }
    if (title === '') {
      setTitleError('Please enter your blog title.');
    }
    if (body === '') {
      setBodyError('Please enter your blog.');
    }
    else {
      const formData = {
        title: title,
        body: body,
      };
      console.log(mutationLoading);
      console.log(mutationError);
      console.log(formData);
      await createBlog({ variables: { title, body }, context: {}});
      console.log('FROM DATA');
      console.log(data);
      console.log(mutationError);
      console.log('Done');
      props.navigation.navigate('Home', {transition:'fadeIn'});
    }
  };

  const {container, errorTextStyle} = styles;

  return (
    <>
      <StatusBar
        backgroundColor="#7727FF"
        hidden={false} translucent={false}
      />

      <SafeAreaView style={[container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[ContainerStyle.appContainer, SharedStyle.paddingHorizontal30, SharedStyle.marginTopStyle10]}>
            <Text style={[AppTextStyle.bigText, AppTextStyle.textMarginBottom30]}>New Blog</Text>

            <Input
              value={title}
              placeholder="Title"
              multiline={true}
              onChangeText={text => {
                setTitle(text);
              }}
            />
            {
              !title && buttonPress ? (
                <Text style={errorTextStyle}>
                  {titleError}
                </Text>
              ) : <></>
            }

            <Input
              value={body}
              placeholder="Write ..."
              multiline={true}
              numberOfLines={100}
              viewStyle={[{height: heightPercentageToDP(50)}]}
              onChangeText={text => {
                setBody(text);
              }}
            />
            {
              !body && buttonPress ? (
                <Text style={errorTextStyle}>
                  {bodyError}
                </Text>
              ) : <></>
            }


            <Button
              onPress={onSubmit}
              viewStyle={[ColorStyle.purpleBlackground, SharedStyle.marginTopStyle30]}>
              Post
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default WriteBlog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'red',
  },
  textStyle: {
    color: '#7727FF',
    fontWeight: 'bold',
    fontSize: 24,
  },
  errorTextStyle: {
    color: '#FF3D00',
    bottom: 12,
    marginLeft: 5,
  },
});

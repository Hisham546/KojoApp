import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import fontFamily from '../../../themes/fontFamily';

const screenWidth = Dimensions.get('window').width;

const CreditHistory = () => {
    const data = [
        { value: 660, label: 'Jan' },
        { value: 720, label: 'Feb' },
        { value: 690, label: 'Mar' },
        { value: 710, label: 'Apr' },
        { value: 750, label: 'May' },
    ];
    const cardWidth = screenWidth - scale(40);
    const chartWidth = cardWidth - scale(65);
    const dynamicSpacing = chartWidth / 4;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Credit Score History</Text>
                <View style={styles.chartWrapper}>
                    <LineChart
                        data={data}
                        curved
                        curvature={0.2}
                        thickness={3.5}
                        color="#3B74FF"
                        hideRules={false}
                        rulesColor="#F0F2F5"
                        rulesType="solid"
                        yAxisThickness={0}
                        xAxisThickness={0}
                        yAxisTextStyle={styles.axisText}
                        xAxisLabelTextStyle={styles.axisText}
                        yAxisOffset={650}
                        maxValue={200}
                        noOfSections={4}
                        stepValue={50}
                        initialSpacing={moderateScale(25)}
                        endSpacing={moderateScale(25)}
                        spacing={dynamicSpacing}
                        hideDataPoints
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: verticalScale(10),
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: scale(28),
        paddingVertical: verticalScale(24),
        paddingHorizontal: scale(8),
 overflow: 'hidden',
    },
    title: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.P_MEDIUM,
        color: '#222222',
        marginBottom: verticalScale(20),
        paddingLeft: scale(8),
    },
    chartWrapper: {
        marginLeft: scale(-6),
        marginBottom: verticalScale(4),
    },
    axisText: {
        color: '#666666D9',
        fontSize: moderateScale(11),
        fontFamily: fontFamily.P_REGULAR,
    },
});

export default CreditHistory;
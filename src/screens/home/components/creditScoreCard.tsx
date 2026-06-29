


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
} from 'react-native-svg';
import Ionicons from '@react-native-vector-icons/ionicons';
import {
    moderateScale,
    scale,
    verticalScale,
} from 'react-native-size-matters';

import dimensions from '../../../utils/dimensions';
import fontFamily from '../../../themes/fontFamily';

const { deviceHeight, deviceWidth } = dimensions
const SCORE = 704;
const MIN = 400;
const MAX = 850;
const WIDTH = scale(330);

const HEIGHT = verticalScale(185);

const RADIUS = scale(120);

const CENTER_X = WIDTH / 2;

const CENTER_Y = HEIGHT - verticalScale(30);

const polarToCartesian = (
    cx: number,
    cy: number,
    r: number,
    angle: number,
) => {
    const rad = ((angle - 180) * Math.PI) / 180;

    return {
        x: cx + r * Math.cos(rad),
        y: cy + r * Math.sin(rad),
    };
};

const describeArc = (
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number,
) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);

    return `
      M ${start.x} ${start.y}
      A ${r} ${r} 0 0 0 ${end.x} ${end.y}
    `;
};

const CreditScoreCard = () => {
    const progress =
        (SCORE - MIN) / (MAX - MIN);

    const progressAngle = 180 * progress;

    return (
        <View style={styles.container}>

            <Svg
                width={WIDTH}
                height={HEIGHT}>
                <Defs>
                    <LinearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%">
                        <Stop
                            offset="0%"
                            stopColor="#FF6A3D"
                        />
                        <Stop
                            offset="45%"
                            stopColor="#FFE600"
                        />
                        <Stop
                            offset="75%"
                            stopColor="#8CFF1F"
                        />
                        <Stop
                            offset="100%"
                            stopColor="#38D430"
                        />
                    </LinearGradient>
                </Defs>

                {/* Background */}
                <Path
                    d={describeArc(
                        CENTER_X,
                        CENTER_Y,
                        RADIUS,
                        0,
                        180,
                    )}
                    stroke="#E4E5EA"
                    strokeWidth={scale(8)}
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Progress */}
                <Path
                    d={describeArc(
                        CENTER_X,
                        CENTER_Y,
                        RADIUS,
                        0,
                        progressAngle,
                    )}
                    stroke="url(#gradient)"
                    strokeWidth={scale(8)}
                    strokeLinecap="round"
                    fill="none"
                />
            </Svg>

            <View style={styles.scoreContainer}>
                <Text style={styles.status}>
                    Good
                </Text>
                <Text style={styles.score}>
                    {SCORE}
                </Text>
                <Text style={styles.points}>
                    +6pts
                </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.range}>
                    400
                </Text>
                <View style={styles.date}>
                    <Ionicons
                        name="calendar-outline"
                        size={18}
                        color="#8D8D98"
                    />
                    <Text style={styles.dateText}>
                        update on 02 Oct 2024
                    </Text>
                </View>
                <Text style={styles.range}>
                    850
                </Text>
            </View>
        </View>
    );
};

export default CreditScoreCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: scale(28),
        paddingVertical: verticalScale(24),
        paddingHorizontal: scale(16),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    scoreContainer: {
        position: 'absolute',
        top: verticalScale(82),
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    status: {
        fontSize: moderateScale(15),
        fontFamily: fontFamily.P_REGULAR,
        color: '#6F6F82',
         top: verticalScale(5),
    },
    score: {
        fontSize: moderateScale(48),
        fontFamily: fontFamily.P_BOLD,
        color: '#2D2D4A',
    },
    points: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.P_REGULAR,
        color: '#24C75A',
        bottom: verticalScale(8)
    },

    footer: {
        width: deviceWidth * 0.80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: verticalScale(8)
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        marginLeft: scale(5),
        color: '#8D8D98',
        fontSize: moderateScale(13),
        fontFamily: fontFamily.P_REGULAR,
    },
    range: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.P_REGULAR,
        color: '#2D2D4A',
    },
});
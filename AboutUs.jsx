import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutUs() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>About Us</Text>

                <Text style={styles.description}>
                    Welcome to <Text style={styles.highlight}>Voice Hiring for Illiterate</Text>, a groundbreaking platform created to bridge the gap between skilled workers who face literacy challenges and valuable job opportunities.
                </Text>

                <Text style={styles.description}>
                    Our mission is to empower individuals by providing an intuitive, voice-assisted hiring experience. We understand that traditional job searches can be daunting for those struggling with reading and writing. That’s why we’ve designed our platform to be simple, efficient, and accessible to everyone.
                </Text>

                <Text style={styles.description}>
                    Utilizing advanced voice recognition technology, our platform allows users to search for jobs, apply for positions, and communicate with employers using their voices. No prior literacy skills are needed. Whether you're a craftsman, caregiver, or technician, we connect you with employers looking for your talents.
                </Text>

                <Text style={styles.description}>
                    Join us in reshaping the future of hiring. We believe that everyone deserves the chance to find meaningful employment, and we are committed to making that a reality, regardless of education level.
                </Text>

                <Text style={styles.description}>
                    Together, let's create a world where skilled individuals can access job opportunities easily and without barriers!
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4A90E2', // A calming blue tone
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        marginVertical: 10,
        color: '#555555', // Dark grey for better readability
        fontSize: 16,
        lineHeight: 24,  // Improved line height for readability
        textAlign: 'center',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#4A90E2', // Highlight color consistent with title
    },
});
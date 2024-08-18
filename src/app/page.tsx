"use client"
import Footer from '@/components/Footer';
import { config } from '../config';
import { Box, Button, Container, Grid, Typography, Divider, Stack, Paper } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const goToApp = () => {
    router.push(config.APP_URL);
  };

  return (
    <>
      <Container maxWidth="lg">
        {/* Block 1: Header Section */}
        <Grid container spacing={4} alignItems="center" sx={{ py: { xs: 4, md: 8 } }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Simplify DAO Governance with Intelligent Insights
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Automate your participation in DAOs with personalized, AI-driven recommendations.
            </Typography>
            <Stack sx={{ mt: 3 }} justifyContent='stretch'>
              <Button variant="outlined" color="primary" onClick={goToApp}>
                Get Started
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src="/hero-image-1.svg" alt="App preview 1" width={500} height={900} />
          </Grid>
        </Grid>

        {/* Block 2: Features Section */}
        <Grid container spacing={4} alignItems="center" sx={{ py: { xs: 4, md: 8 } }}>
          <Grid item xs={12} md={6}>
            <Image src="/hero-image-2.svg" alt="App preview 2" width={500} height={900} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                What Does Delegaitor AI Do?
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">Aggregate DAO Proposals</Typography>
              <Typography variant="body1">
                Delegaitor AI automatically gathers proposals from the DAOs you are involved in, keeping you up-to-date with the latest governance matters.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">Summarize Proposals</Typography>
              <Typography variant="body1">
                Say goodbye to information overload. Our AI-powered platform summarizes each proposal, giving you a clear and concise overview of what’s at stake.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">Personalized Recommendations</Typography>
              <Typography variant="body1">
                Based on your pre-configured settings and preferences, Delegaitor AI suggests the best voting options tailored to your interests and values. No more second-guessing your decisions; get recommendations that align with what matters most to you.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* Block 4: Vision Section */}
        <Box
          sx={{
            py: { xs: 4, md: 8 },
            textAlign: 'center',
            // backgroundColor: 'background.secondary', // Default background color from the theme
            px: { xs: 2, md: 6 },
          }}
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            Why Choose Delegaitor AI?
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src="/fake-path/icon-beta.png" alt="Beta Release" width={50} height={50} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Time-Saving
                </Typography>
                <Typography variant="body1">
                  Focus on what’s important without getting bogged down by endless proposal reading.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src="/fake-path/icon-web3.png" alt="Web 3.0 Login" width={50} height={50} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Informed Decisions
                </Typography>
                <Typography variant="body1">
                  With tailored summaries and recommendations, make informed choices that reflect your stance and priorities.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src="/fake-path/icon-grants.png" alt="Grants" width={50} height={50} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Effortless Participation
                </Typography>
                <Typography variant="body1">
                  Engage in DAO governance more effectively, even if you have limited time or resources.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src="/fake-path/icon-security.png" alt="Security" width={50} height={50} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Secure & Private
                </Typography>
                <Typography variant="body1">
                  Your data is kept secure and private, ensuring that your participation in DAOs is both safe and confidential.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src="/fake-path/icon-customization.png" alt="Customization" width={50} height={50} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Fully Customizable
                </Typography>
                <Typography variant="body1">
                  Tailor the app’s features to your specific needs, with customizable settings that align with your preferences.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src="/fake-path/icon-support.png" alt="Support" width={50} height={50} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Dedicated Support
                </Typography>
                <Typography variant="body1">
                  Get access to our dedicated support team, ready to assist you with any questions or issues you might have.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>


        {/* Block 3: Missing Section - Help Shape the Future */}
        <Paper>
          <Box
            sx={{
              py: { xs: 4, md: 8 },
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              px: { xs: 2, md: 6 },
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 4, md: 0 },
              }}
            >
              <Image src="/fake-path/raccoon.png" alt="Mascot" width={250} height={250} />
            </Box>

            <Box
              sx={{
                flex: 2,
                textAlign: { xs: 'center', md: 'left' },
                ml: { md: 4 },
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                Help Shape the Future of Delegaitor
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 4 }}>
                We value your input and want to hear from you! Whether you&apos;re an active community member or just getting started, your feedback is crucial in helping us improve Delegaitor.
              </Typography>
              <Button variant="contained" color="primary" sx={{ alignSelf: 'end' }}>
                Message us
              </Button>
            </Box>
          </Box>
        </Paper>

      </Container>
      <Footer />
    </>
  );
}

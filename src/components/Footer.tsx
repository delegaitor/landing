import { Box, Container, Grid, Typography, Link, Stack, Divider } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.dark',
        // color: 'white',
        pt: 8,
        pb: 6,
        mt: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Branding */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Image src="/logo-white.svg" alt="Delegaitor AI Logo" width={150} height={50} />
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Delegaitor AI simplifies your DAO governance experience by providing personalized insights and recommendations.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
              <Link href="#" color="inherit">
                <GitHub />
              </Link>
            </Stack>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              <Link href="#" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Features
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Pricing
              </Link>
              <Link href="#" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Contact
              </Link>
            </Stack>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Email: support@delegaitor.xyz
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Phone: +1 (800) 123-4567
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Address: 123 Blockchain Avenue, Web3 City, Decentraland
            </Typography>
          </Grid>
        </Grid>

        {/* <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} /> */}

        {/* Footer Bottom */}
        <Box
          sx={{
            textAlign: 'center',
            pt: 3,
            // borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 4,
          }}
        >
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Delegaitor AI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

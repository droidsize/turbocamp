#!/bin/bash

# Setup Environment Files for Light Forge
# This script creates all necessary .env files with proper configuration

set -e

echo "🔧 Setting up environment files for Light Forge..."
echo ""

# Check if openssl is available
if ! command -v openssl &> /dev/null; then
    echo "❌ Error: openssl is required but not installed."
    echo "Please install openssl and try again."
    exit 1
fi

# Generate Better Auth secret
echo "🔑 Generating Better Auth secret..."
BETTER_AUTH_SECRET=$(openssl rand -base64 32)

# Create packages/db/.env
echo "📁 Creating packages/db/.env..."
mkdir -p packages/db
cat > packages/db/.env << EOF
# Database Configuration
DATABASE_URL="postgresql://postgres@localhost:5432/lightforge"
EOF

# Create apps/api/.env.local
echo "📁 Creating apps/api/.env.local..."
mkdir -p apps/api
cat > apps/api/.env.local << EOF
# Database
DATABASE_URL="postgresql://postgres@localhost:5432/lightforge"

# Authentication
BETTER_AUTH_SECRET="$BETTER_AUTH_SECRET"
BETTER_AUTH_URL="http://localhost:3002"

# Optional: Email Configuration (uncomment and configure as needed)
# EMAIL_FROM="noreply@yourdomain.com"
# RESEND_API_KEY="your_resend_api_key"

# Optional: Analytics (uncomment and configure as needed)
# POSTHOG_API_KEY="your_posthog_key"
# POSTHOG_HOST="https://app.posthog.com"

# Optional: Storage (uncomment and configure as needed)
# AWS_ACCESS_KEY_ID="your_aws_access_key"
# AWS_SECRET_ACCESS_KEY="your_aws_secret_key"
# AWS_REGION="us-east-1"
# AWS_BUCKET_NAME="your_bucket_name"
EOF

# Create apps/dashboard/.env.local
echo "📁 Creating apps/dashboard/.env.local..."
mkdir -p apps/dashboard
cat > apps/dashboard/.env.local << EOF
# Authentication
AUTH_API_URL="http://localhost:3002"
NEXT_PUBLIC_AUTH_API_URL="http://localhost:3002"
BETTER_AUTH_SECRET="$BETTER_AUTH_SECRET"

# App URLs
NEXT_PUBLIC_DASHBOARD_URL="http://localhost:3001"
NEXT_PUBLIC_WEB_URL="http://localhost:3000"

# Optional: Analytics (uncomment and configure as needed)
# NEXT_PUBLIC_POSTHOG_KEY="your_posthog_key"
# NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
EOF

# Create apps/web/.env.local
echo "📁 Creating apps/web/.env.local..."
mkdir -p apps/web
cat > apps/web/.env.local << EOF
# Authentication
AUTH_API_URL="http://localhost:3002"
NEXT_PUBLIC_AUTH_API_URL="http://localhost:3002"
BETTER_AUTH_SECRET="$BETTER_AUTH_SECRET"

# App URLs
NEXT_PUBLIC_WEB_URL="http://localhost:3000"
NEXT_PUBLIC_DASHBOARD_URL="http://localhost:3001"

# Optional: Analytics (uncomment and configure as needed)
# NEXT_PUBLIC_POSTHOG_KEY="your_posthog_key"
# NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"

# Optional: Email Configuration (for contact forms)
# RESEND_API_KEY="your_resend_api_key"
EOF

# Create apps/docs/.env.local (if needed)
echo "📁 Creating apps/docs/.env.local..."
mkdir -p apps/docs
cat > apps/docs/.env.local << EOF
# Optional: Analytics (uncomment and configure as needed)
# NEXT_PUBLIC_POSTHOG_KEY="your_posthog_key"
# NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
EOF

echo ""
echo "✅ Environment files created successfully!"
echo ""
echo "📋 Summary:"
echo "   • Generated Better Auth Secret: $BETTER_AUTH_SECRET"
echo "   • Created .env files for all apps and packages"
echo "   • Database configured for PostgreSQL on localhost:5432"
echo ""
echo "🔧 Next steps:"
echo "   1. Start your PostgreSQL database"
echo "   2. Update the DATABASE_URL if your database config differs"
echo "   3. Uncomment and configure optional services (email, analytics, etc.)"
echo "   4. Run 'pnpm install && pnpm db:push' to set up the database"
echo "   5. Run 'pnpm dev' to start the development servers"
echo ""
echo "📖 For more configuration options, check the documentation at:"
echo "   http://localhost:3003/docs/getting-started/environment-variables" 
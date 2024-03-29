import { SupabaseAdmin } from '../../../lib/supabase-admin';

export default async (req, res) => {
    if (req.method === 'POST') {

        // Call the increment_page_view stored procedure in the database.
        console.log(req.query.slug);
        if (!req.query.slug) {
            return res.status(200).json({
                message: `Page already viewed: ${req.query.slug}`
            });
        } else {
            await SupabaseAdmin.rpc('increment_page_view', { page_slug: req.query.slug });
            return res.status(200).json({
                message: `Successfully incremented page: ${req.query.slug}`
            });
        }
    }

    if (req.method === 'GET') {
        // Query the pages table in the database where slug equals the request params slug.
        const { data } = await SupabaseAdmin.from('pages').select('view_count').filter('slug', 'eq', req.query.slug);

        if (data) {
            return res.status(200).json({
                total: data[0]?.view_count || null
            });
        } else {
            return res.status(200).json({
                total: null
            });
        }
    }

    console.log('Unsupported Request', req.method, req.query.slug);

    return res.status(400).json({
        message: `Unsupported Request: ${req.method} ${req.query.slug}`
    });
};
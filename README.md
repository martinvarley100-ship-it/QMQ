# AimIQ Quote Me Quick demo

Interactive HTML prototype of Quote Me Quick (QMQ) inside the AimIQ shell. Built for Martin Varley to share with Gareth Taylor as the visual scaffold to feed into Claude Code.

## How to view

Open `index.html` in a browser, or visit the GitHub Pages URL once deployed.

## Structure

```
index.html                          Tile grid landing, QMQ as fifth IQ Tool
assets/shell.css                    Design system, AimIQ aesthetic
assets/shell.js                     Shell rendering, demo toggle, toasts
seller/                             11 pages, Jenna's distributor journey
  01-qmq-dashboard.html             QMQ landing dashboard
  02-step1-product.html             Product picker with Product Match strip
  03-step2-brief.html               Brief form
  04-step3-suppliers.html           Supplier picker with eligibility filter
  05-step4-review.html              Review and send
  06-quote-sent.html                Sent confirmation
  07-dashboard-open.html            Request open, 2 of 3 replies in
  08-dashboard-replies-in.html      Comparison dashboard (the heart of the seller experience)
  09-supplier-detail.html           Supplier detail drawer
  10-convert-to-po.html             PO confirmation
  11-pdf-quote.html                 Supplier-branded PDF quote preview
supplier/                           12 pages, supplier surface
  01-inbox.html                     Pending bids inbox
  02-bid-response-erica.html        Erica's bid response (Insight tier, 3 context panels)
  03-bid-submitted.html             Submission confirmation
  04-supplier-dashboard.html        Dave's BruMate Pro dashboard
  05-win-loss-detail.html           Anonymised win/loss drill-down
  06-rfm-heatmap.html               Full RFM heatmap
  07-tactical.html                  Tactical surface, surplus + idle + watch
  08-loyalty-tax.html               Loyalty Tax model explainer
  09-rep-performance.html           Pro tier rep performance
  10-bid-response-jen.html          Jen at Garyline, challenger view
  11-free-tier-locked.html          Free tier wedge view
  12-rfm-trend.html                 RFM trend drill-down with R-drop alert
```

## Demo toggle

Every page has a floating toggle bottom-right that lets you flip between Jenna (seller) and Erica or Jen (supplier) on the SAME brief. This is the closing argument for the product, the information asymmetry between the two sides.

## Voice rules held

Zero em dashes, zero en dashes across all 26 files. British English narrative, US product context. No consultant register.

## Not included

This is a static HTML demo. There is no real auth, no backend, no real data. All button clicks navigate between hardcoded pages or fire toast notifications. The whole thing renders without a build step, no React, no compilation. Open any page directly in a browser.

## Built by

Martin Varley (CSO, Altitude Group / AIM Smarter) with Claude as the building hand.

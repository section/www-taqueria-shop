# Mi Taqueria

This repository contains the source code for a simple web application that is deployed on Section.

Environment information:

* Application: [cjbrewer/storefront:0.0.1]()
* API: [cjbrewer/api:0.0.1]()
* Router: Section mananged OpenResty `gcr.io/section-io/openresty:1.19.3.1-k3`
* KEI Endpoint: `https://redacted.kube.api.section.io/`
* Website: [https://www.taqueria.shop](https://www.taqueria.shop)

## Kubectl setup

Following Section's documention [set up kubectl](https://www.section.io/docs/get-started/deploy-container/):

```bash
kubectl config set-cluster www-taqueria-shop \
   --certificate-authority=/etc/ssl/certs/ca-certificates.crt \
   --server=KEI_ENDPOINT
```

```bash
kubectl config set-context taqueria-shop \
   --cluster=www-taqueria-shop \
   --user=section-user
```

```bash
kubectl config use-context taqueria-shop
```

## Deploying the application

Use the following command to deploy the application:

```bash
kubectl apply -f store/store.yaml \
    -f api/api.yaml \
    -f router/router-configmap.yaml \
    -f router/router.yaml \
    -f ingress/service.ingress-upstream.yaml
```

## Configuring the AEE

This example is configured the environment to be deployed only on the Lumen Denver PoP.

```bash
kubectl apply -f aee/location-optimizer.yaml
```

## Application architecture

Please refer to the PDF labeled `www-taqueria-shop.pdf` in the repository.

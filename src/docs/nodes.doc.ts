

/**
 * @swagger
 * components:
 *  schemas:
 *    ATM:
 *      type: object
 *      properties:
 *        atmLocation:
 *          type: object
 *          description: A location with several specifications like address, coordinates, id, etc
 *        atm_network_type:
 *          type: string
 *          description: The type of atm network
 *        distance:
 *          type: integer
 *          description: The total distance
 *      example:
 *        atmLocation:
 *         address:
 *          city: San Francisco
 *          country: US
 *          postalCode: 94114
 *          state: CA
 *          street: 443 Castro Street
 *         coordinates:
 *          latitude: 37.76182915
 *          longitude: -122.434842248124
 *         id: 171352709
 *         isAvailable24Hours: true
 *         isDepositAvailable: true
 *         isHandicappedAccessible: false
 *         isOffPremise: false
 *         isSeasonal: false
 *         languageType: E
 *         locationDescription: 443 Castro Street, San Francisco, CA 94114
 *         logoName: PAS
 *         name: U.S. Bank Castro
 *         participantId: test
 *         terminalId: SUS4W103 
 *        atm_network_type: money_pass
 *        distance: 0.411388225850677

 *  
 *    Addres:
 *      type: object
 *      properties:
 *        city:
 *          type: string
 *          description: Addres city
 *        country:
 *          type: string
 *          description: Adress country
 *        postalCode:
 *          type: string
 *          description: Adress postalCode
 *        state:
 *          type: string
 *          description: Address state
 *        street:
 *          type: string
 *          description: Address street
 *      example:
 *        city: San Francisco
 *        country: US
 *        postalCode: 94114
 *        state: CA
 *        street: 443 Castro Street
 *
 *    Coordinate:
 *      type: object
 *      properties:
 *        latitude:
 *          type: integer
 *          description: Location latitude
 *        longitude:
 *          type: integer
 *          description: Location longitude
 *      example:
 *       latitude: 37.76182915
 *       longitude: -122.434842248124
 *
 *    AtmLocation:
 *      type: object
 *      properties:
 *       address: 
 *        $ref: '#/components/schemas/Addres'
 *       coordinates: 
 *        $ref: '#/components/schemas/Coordinate'
 *
 *
 *    NodeType:
 *      type: object
 *      properties:
 *       type: 
 *        description: Node type
 *        example: DEPOSIT-US
 *
 * 
 *    NodeAgreement:
 *      type: object
 *      properties:
 *       type:
 *        type: string
 *        example: CRYPTO-US  
 *       url:
 *        type: string
 *        example: N/A 
 *      
 *
 *    NodeObject:
 *      type: object
 *      description: Node or account information
 *      properties:
 *        nickname:
 *          type: string
 *          example: Jhon Doe   
 *        allowed:
 *          type: string
 *          example: CREDIT-AND-DEBIT   
 *        balance:
 *          type: object
 *          properties:
 *            amount:
 *              type: integer
 *              example: 250
 *            currency:
 *              type: string
 *              example: US
 *        client:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *              example: 1234
 *            name:
 *              type: string
 *              example: John Doe
 *        extra:
 *          type: object
 *          properties:
 *            note:
 *              type: string
 *              example: 1234
 *            other:
 *              type: object
 *              properties:
 *                access_token:
 *                  type: string
 *                  example: John Doe
 *            supp_id:
 *              type: string
 *              example: 1234
 *        monthly_withdrawals_remaining:
 *          type: integer
 *          example: 350   
 *        document_id:
 *          type: string
 *          example: uid_0523  
 *        bank_code:
 *          type: string
 *          example: N/A   
 *        info:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/NodeAgreement'
 * 
 * 
 *    InvalidOauth:
 *      type: object
 *      properties:
 *       error:
 *        type: object
 *        properties:
 *         code:
 *          type: string
 *          example: invalid_oauth_key  
 *         en: 
 *          type: string
 *          example: Invalid/expired oauth_key.
 *       error_code:
 *         type: string
 *         example: 300
 *       http_code:
 *         type: string
 *         example: 401     
 *
 *  parameters:
 *    Page:
 *      in: path
 *      name: page
 *      required: false
 *      schema:
 *        type: string
 *      description: Number of page
 *      example: 2
 *   
 *    PageSize:
 *      in: path
 *      name: pageSize
 *      required: false
 *      schema:
 *        type: string
 *      description: Number of items per page
 *      example: 10
 *   
 *    Type:
 *      in: path
 *      name: type
 *      required: false
 *      schema:
 *        type: string
 *      description: Node type
 *      example: CRYPTO-US
 * 
 *    NodeId:
 *      in: path
 *      name: nodeId
 *      required: false
 *      schema:
 *        type: string
 *      description: Node Id
 *      example: 63caf414e53b3d7739000295 
 */

/**
 * @swagger
 * tags:
 *  name: Nodes
 *  description: Nodes endpoints
 */

/**
 * @swagger
 * /nodes/atms:
 *  get:
 *    summary: Returns a list of available ATMs
 *    tags: [Nodes]
 *    responses:
 *      200:
 *        description: List of ATMs
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ATM'
 *      500:
 *        description: Invalid credentials
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InvalidOauth'
 */

/**
 * @swagger
 * /nodes/types:
 *  get:
 *    summary: Returns a list with the allowed types
 *    tags: [Nodes]
 *    responses:
 *      200:
 *        description: List of types
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/NodeType'
 * 
 *      500:
 *        description: Invalid credentials
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InvalidOauth'
 * 
 *      
 */

/**
 * @swagger
 * /nodes/all/{userId}:
 *  get:
 *    summary: Returns a list with the allowed types
 *    tags: [Nodes]
 *    parameters:
 *      - $ref: '#/components/parameters/Page'
 *      - $ref: '#/components/parameters/PageSize'
 *      - $ref: '#/components/parameters/Type'
 *    responses:
 *      200:
 *        description: List of types
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/NodeType'
 * 
 *      500:
 *        description: Invalid credentials
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InvalidOauth'
 * 
 *      
 */
